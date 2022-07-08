import React from 'react';
import styled from 'styled-components';

import { Input } from './Input';
import { TipButtoncluster } from './TipButtonCluster';
import { ResultDisplay } from './ResultDisplay';

import dollarSign from '../public/images/icon-dollar.svg';
import personIcon from '../public/images/icon-person.svg';

const StyledDiv = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 15px;
  height: 400px;
  width: 800px;
  padding: 30px;
  display: flex;
  gap: 30px;

  h4 {
    color: hsl(184, 14%, 56%);
  }

  .left-container {
    width: 50%;
    display: flex;
    gap: 40px;
    flex-direction: column;
  }

  .tip-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .right-container {
    width: 50%;
    background-color: hsl(183, 100%, 15%);
    border-radius: 15px;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .reset-btn {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: hsl(173, 61%, 44%);
    color: hsl(183, 100%, 15%);
    border: none;
    font-family: 'Space Mono', monospace;
    font-size: 1.2rem;
    font-weight: 800;

    :active {
      background-color: #76c7bd;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

type MainContainerState = {
  bill: number;
  tipPercentage: number;
  numOfPeople: number;
  tipPerPerson: string;
  totalPerPerson: string;
  isCustom: boolean;
};

export class MainContainer extends React.Component<{}, MainContainerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      bill: 0,
      tipPercentage: 0,
      numOfPeople: 0,
      tipPerPerson: '0',
      totalPerPerson: '0',
      isCustom: false,
    };

    this.handleBillInput = this.handleBillInput.bind(this);
    this.handleNumOfPeopleInput = this.handleNumOfPeopleInput.bind(this);
    this.handleTipButtonPress = this.handleTipButtonPress.bind(this);
    this.handleCustomButonPress = this.handleCustomButonPress.bind(this);
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleResetBtnClick = this.handleResetBtnClick.bind(this);
  }

  handleBillInput(event: React.ChangeEvent<HTMLInputElement>, value: string) {
    this.setState({ bill: parseFloat(value) });
  }

  handleNumOfPeopleInput(
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) {
    this.setState({ numOfPeople: parseInt(value) });
  }

  handleTipButtonPress(newValue: string) {
    this.setState({ tipPercentage: parseInt(newValue) });
  }

  handleCustomButonPress() {
    this.setState({ isCustom: !this.state.isCustom });
  }

  handleInputValueChange() {
    const { bill, tipPercentage, numOfPeople } = this.state;

    let calculatedTipPerPerson = (bill * tipPercentage * 0.01) / numOfPeople;
    let calculatedTotalPerPerson = bill / numOfPeople + calculatedTipPerPerson;

    if (
      !calculatedTipPerPerson ||
      !calculatedTotalPerPerson ||
      calculatedTipPerPerson == Infinity ||
      calculatedTotalPerPerson == Infinity
    ) {
      this.setState({
        tipPerPerson: '...',
        totalPerPerson: '...',
      });
    } else {
      this.setState({
        tipPerPerson: `$${calculatedTipPerPerson.toFixed(2)}`,
        totalPerPerson: `$${calculatedTotalPerPerson.toFixed(2)}`,
      });
    }
  }

  handleResetBtnClick() {
    this.setState(
      {
        bill: 0,
        tipPercentage: 0,
        numOfPeople: 0,
        isCustom: false,
      },
      () => {
        this.setState({
          tipPerPerson: '0',
          totalPerPerson: '0',
        });
      }
    );
  }

  componentDidUpdate(preProps, prevState: MainContainerState) {
    if (
      this.state.bill !== prevState.bill ||
      this.state.numOfPeople !== prevState.numOfPeople ||
      this.state.tipPercentage !== prevState.tipPercentage
    ) {
      this.handleInputValueChange();
    }
  }

  render() {
    const { tipPerPerson, totalPerPerson, bill, numOfPeople } = this.state;
    return (
      <StyledDiv>
        <div className="left-container">
          <Input
            label="Bill"
            icon={dollarSign}
            onChange={this.handleBillInput}
            value={bill}
          />
          <div className="tip-buttons">
            <h4>Select Tip %</h4>
            <TipButtoncluster
              onClick={this.handleTipButtonPress}
              customClick={this.handleCustomButonPress}
            />
          </div>
          <Input
            label="Number of People"
            icon={personIcon}
            onChange={this.handleNumOfPeopleInput}
            value={numOfPeople}
          />
        </div>
        <div className="right-container">
          <div className="top-content">
            <ResultDisplay label="Tip Amount" result={`${tipPerPerson}`} />
            <ResultDisplay label="Total" result={`${totalPerPerson}`} />
          </div>
          <div className="bottom-content">
            <button onClick={this.handleResetBtnClick} className="reset-btn">
              RESET
            </button>
          </div>
        </div>
      </StyledDiv>
    );
  }
}

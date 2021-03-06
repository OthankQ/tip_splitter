import React from 'react';
import styled from 'styled-components';

import { Input } from './Input';
import { TipButtoncluster } from './TipButtonCluster';
import { ResultDisplay } from './ResultDisplay';

import dollarSign from '../public/images/icon-dollar.svg';
import personIcon from '../public/images/icon-person.svg';
import { type } from 'os';

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

  @media (max-width: 805px) {
    margin-bottom: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 374px;
    .left-container,
    .right-container {
      width: 100%;
    }
    gap: none;
  }
`;

type MainContainerState = {
  bill: number | string;
  tipPercentage: number | string;
  numOfPeople: number | string;
  tipPerPerson: string;
  totalPerPerson: string;
  isCustom: boolean;
};

export class MainContainer extends React.Component<{}, MainContainerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      bill: '',
      tipPercentage: 0,
      numOfPeople: '',
      tipPerPerson: '$0.00',
      totalPerPerson: '$0.00',
      isCustom: false,
    };

    this.handleBillInput = this.handleBillInput.bind(this);
    this.handleBillInputClick = this.handleBillInputClick.bind(this);
    this.handleNumOfPeopleInput = this.handleNumOfPeopleInput.bind(this);
    this.handleNumOfPeopleInputClick =
      this.handleNumOfPeopleInputClick.bind(this);
    this.handleTipButtonPress = this.handleTipButtonPress.bind(this);
    this.handleCustomButtonPress = this.handleCustomButtonPress.bind(this);
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleResetBtnClick = this.handleResetBtnClick.bind(this);
    this.handleCustomTipInputChange =
      this.handleCustomTipInputChange.bind(this);
  }

  handleBillInput(event: React.ChangeEvent<HTMLInputElement>, value: string) {
    this.setState({ bill: value });
  }

  handleBillInputClick() {
    this.setState({ bill: '' });
  }

  handleNumOfPeopleInput(
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) {
    this.setState({ numOfPeople: value });
  }

  handleNumOfPeopleInputClick() {
    this.setState({ numOfPeople: '' });
  }

  handleTipButtonPress(newValue: string) {
    this.setState({ tipPercentage: parseInt(newValue), isCustom: false });
  }

  handleCustomButtonPress() {
    this.setState({ isCustom: true, tipPercentage: 0 });
  }

  handleCustomTipInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ tipPercentage: event.target.value });
  }

  handleInputValueChange() {
    const { bill, tipPercentage, numOfPeople } = this.state;

    if (
      typeof bill == 'string' &&
      typeof numOfPeople == 'string' &&
      typeof tipPercentage == 'number'
    ) {
      let calculatedTipPerPerson =
        (parseFloat(bill) * tipPercentage * 0.01) / parseInt(numOfPeople);
      let calculatedTotalPerPerson =
        parseFloat(bill) / parseInt(numOfPeople) + calculatedTipPerPerson;
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
    } else if (
      typeof bill == 'string' &&
      typeof numOfPeople == 'string' &&
      typeof tipPercentage == 'string'
    ) {
      let calculatedTipPerPerson =
        (parseFloat(bill) * parseFloat(tipPercentage) * 0.01) /
        parseInt(numOfPeople);
      let calculatedTotalPerPerson =
        parseFloat(bill) / parseInt(numOfPeople) + calculatedTipPerPerson;
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
  }

  handleResetBtnClick() {
    this.setState(
      {
        bill: '',
        tipPercentage: 0,
        numOfPeople: '',
        isCustom: false,
      },
      () => {
        this.setState({
          tipPerPerson: '$0.00',
          totalPerPerson: '$0.00',
        });
      }
    );
  }

  componentDidUpdate(_preProps: any, prevState: MainContainerState) {
    if (
      this.state.bill !== prevState.bill ||
      this.state.numOfPeople !== prevState.numOfPeople ||
      this.state.tipPercentage !== prevState.tipPercentage
    ) {
      this.handleInputValueChange();
    }
  }

  render() {
    const {
      tipPerPerson,
      totalPerPerson,
      bill,
      numOfPeople,
      isCustom,
      tipPercentage,
    } = this.state;
    return (
      <StyledDiv>
        <div className="left-container">
          <Input
            label="Bill"
            icon={dollarSign}
            onChange={this.handleBillInput}
            onClick={this.handleBillInputClick}
            value={bill}
          />
          <div className="tip-buttons">
            <h4>Select Tip %</h4>
            <TipButtoncluster
              onClick={this.handleTipButtonPress}
              customClick={this.handleCustomButtonPress}
              isCustom={isCustom}
              currentTipPercentage={tipPercentage}
              onCustomChange={this.handleCustomTipInputChange}
            />
          </div>
          <Input
            label="Number of People"
            icon={personIcon}
            onChange={this.handleNumOfPeopleInput}
            value={numOfPeople}
            onClick={this.handleNumOfPeopleInputClick}
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

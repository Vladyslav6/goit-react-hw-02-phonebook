import { Component } from 'react';
import FeedbackOptions from 'components/bottunMenu/bottunMenu';
import StatisticMenu from 'components/StatisticMenu/StatisticMenutwo';
import SectionTitle from 'components/Section/SectionTitle';
import Message from 'components/Message/Message';
class Vote extends Component {
  static voteOptions = ['Good', 'Neutral', 'Bad'];
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  countTotalFeedback() {
    const { Good, Neutral, Bad } = this.state;
    const total = Good + Neutral + Bad;
    return total;
  }

  countPositiveFeedbackPercentage(keyName) {
    const total = this.countTotalFeedback();
    const value = this.state[keyName];
    if (!total) {
      return 0;
    }
    const PosFeedback = Number((value / total) * 100).toFixed(2);
    return PosFeedback;
  }

  addStatist = keyName => {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  render() {
    const Good = this.state.Good;
    const Neutral = this.state.Neutral;
    const Bad = this.state.Bad;
    const PosFeedback = this.countPositiveFeedbackPercentage('Good');
    const total = this.countTotalFeedback();
    return (
      <>
        <SectionTitle Title="Please leave feedback">
          <FeedbackOptions
            option={Vote.voteOptions}
            onLeaveFeedback={this.addStatist}
          />
        </SectionTitle>
        {!total == 0 ? (
          <SectionTitle Title="Statistic">
            <StatisticMenu
              Good={Good}
              Neutral={Neutral}
              Bad={Bad}
              PosFeedback={PosFeedback}
              total={total}
            />
          </SectionTitle>
        ) : (
          <Message NotMessage={'There is no feedback'} />
        )}
      </>
    );
  }
}

export default Vote;

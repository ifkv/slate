import * as React from 'react';
import * as System from '~/components/system';

import SystemPage from '~/components/system/SystemPage';
import ViewSourceLink from '~/components/system/ViewSourceLink';

const TAB_GROUP_TWO = [
  { value: '1', label: 'Capricorn' },
  { value: '2', label: 'Aquarius' },
];

const TAB_GROUP_FOUR = [
  { value: '1', label: 'Capricorn' },
  { value: '2', label: 'Aquarius' },
  { value: '3', label: 'Pisces' },
  { value: '4', label: 'Aries' },
];

export default class SystemPageCardTabs extends React.Component {
  state = {
    eighteen: '2',
    nineteen: null,
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SystemPage
        title="FCDS"
        description="This is an early preview of the Filecoin Client Design System (FCDS)."
        url="https://fps.onrender.com/system/card-tabs">
        <System.H1>
          Card Tabs <ViewSourceLink file="card-tabs.js" />
        </System.H1>
        <br />
        <br />
        <System.P>The CardTabGroup component is used to allow the users to switch between views.</System.P>
        <br />
        <br />
        <System.H2>Usage</System.H2>
        <hr />
        <br />
        <System.P>Define the tab group values and labels.</System.P>
        <br />
        <System.CodeBlock>
{`const TAB_GROUP_TWO = [
  { value: '1', label: 'Capricorn' },
  { value: '2', label: 'Aquarius' },
];

const TAB_GROUP_FOUR = [
  { value: '1', label: 'Capricorn' },
  { value: '2', label: 'Aquarius' },
  { value: '3', label: 'Pisces' },
  { value: '4', label: 'Aries' },
];`}
        </System.CodeBlock>
        <br />
        <System.P>Define the CardTab value states and handle the state when a tab is changed.</System.P>
        <br />
        <System.CodeBlock>
{`state = {
  eighteen: '2',
  nineteen: null,
};

_handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
};`}
        </System.CodeBlock>
        <br />
        <System.P>Declare the CardTabGroup component.</System.P>
        <br />
        <System.CodeBlock>
{`<System.CardTabGroup
  name="eighteen"
  options={TAB_GROUP_TWO}
  value={this.state.eighteen}
  onChange={this._handleChange}
/>

<System.CardTabGroup
  name="nineteen"
  options={TAB_GROUP_FOUR}
  value={this.state.nineteen}
  onChange={this._handleChange}
/>`}
        </System.CodeBlock>
        <br />
        <br />
        <System.H2>Output</System.H2>
        <hr />
        <br />
        <System.CardTabGroup
          name="eighteen"
          options={TAB_GROUP_TWO}
          value={this.state.eighteen}
          onChange={this._handleChange}
        />
        <br />
        <br />
        <System.CardTabGroup
          name="nineteen"
          options={TAB_GROUP_FOUR}
          value={this.state.nineteen}
          onChange={this._handleChange}
        />
      </SystemPage>
    );
  }
}
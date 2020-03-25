import React, { Component } from 'react';

import Label from '../../components/Utils/Label';
import Dropdown from '../../components/Utils/Dropdown';
import Button from '../../components/Utils/Button';
import Input from '../../components/Utils/Input';


export default class AddTopic extends Component {

  render() {
    return (
      <div>
        <Label>Create a Topic</Label>
        <Input />

        <Label>Description</Label>
        <Input />

        <Label>Add Thoughts to Topic</Label>
        <Dropdown />

        <Label>Add Connections to Topic</Label>
        <Dropdown />

        <Button type='submit'>Submit</Button>

      </div>
    );
  }
}


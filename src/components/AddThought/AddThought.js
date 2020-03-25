import React, { Component } from 'react';

import Label from '../../components/Utils/Label';
import Dropdown from '../../components/Utils/Dropdown';
import Textarea from '../../components/Utils/Textarea';
import Button from '../../components/Utils/Button';
import Input from '../../components/Utils/Input';


export default class AddThought extends Component {

  render() {
    return (
      <div>
        {/* <Title>Create A Thought</Title> */}
        
        <Label>Title</Label>
        <Input />

        <Label>Type</Label>
        <Dropdown />

        <Label>Topic</Label>
        <Dropdown />

        <Label>Content</Label>
        <Textarea />

        <Button type='submit'>Submit</Button>

      </div>
    );
  }
}


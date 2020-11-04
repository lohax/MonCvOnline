import React, { Component } from "react";

export default class Effect extends Component {
    render() {

        document.querySelectorAll('li').addEventListener('click', function(){
            alert('hello')
        })
    }
}
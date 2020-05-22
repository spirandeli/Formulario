import React, {useState, useEffect} from "react";
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1360px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right:auto;
    margin-left:auto;
    box-sizing: border-box
    &:before,
    &:after {
        content: " ";
    display: grid;
    }
    &after {
        clear: both;
        }
`

export const Row = styled.div`
    width: 100%;
    heigth: auto;
    float: left;
    box-sizing: border-box;
    &:before,
    &:after {
        content:" ";
    display: grid;
    }
    &:after {
        clear:both;
    }
`

function getWidthGrid(value) {
    if (!value) return;

    let width = value /11*100;
    return `width: ${width}%;`;
}

export const Column = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px:
    box-sizing: border-box:
    position: relative;
    
    @media only screen and (max-width: 768px) {
        ${({ mobile }) => mobile && getWidthGrid(mobile)}
       }
    @media only screen and (max-width: 768px) {
        ${({ tablet }) => tablet && getWidthGrid(tablet)}
       }
    @media only screen and (max-width: 768px) {
        ${({ desktop }) => desktop && getWidthGrid(desktop)}
        }

`;

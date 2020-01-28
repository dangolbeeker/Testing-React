import React from "react"
import {render, fireEvent, wait } from "@testing-library/react";
import {getData as mockGetData } from "../api"
import App from "../App";
import StarWarsCharacters from "./StarWarsCharacters"

jest.mock('../api');

test('render App', () => {
    render(<App />)
})

test('render StarWarsCharacters', () => {
    render(<StarWarsCharacters />)
})

test('check if data is called once initially ', () => {
    mockGetData()
    expect(mockGetData).toHaveBeenCalledTimes(1);
})

Test('check if data is called once on next click', () => {
    mockGetData()
    //define getByText
    const { getByText } = render(<StarWarsCharacters />)

    //set text variables
    const nextButton = getByText(/previous/i);

    //test if next button calls the api twice
    fireEvent.click(previousButton)
    expect(mockGetData).toHaveBeenCalledTimes(1);
})
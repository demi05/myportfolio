/// <reference types="react-scripts" />

declare module 'react-slick' {
    import * as React from 'react';
  
    export type Settings = {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      prevArrow?: React.ReactElement;
      nextArrow?: React.ReactElement;
      [key: string]: any;
    }
  
    export default class Slider extends React.Component<Settings> {}
  }
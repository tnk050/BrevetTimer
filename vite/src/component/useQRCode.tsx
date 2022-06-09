import React from 'react';
import QRCode from 'qrcode';

export interface Colors {
  dark?: string;
  light?: string;
}

export interface Options {
  type?: string;
  quality?: number;
  level?: string;
  margin?: number;
  scale?: number;
  width?: number;
  color?: Colors;
}

export interface IQRCode {
  text: string;
  options?: Options;
}

function useCanvasComponent() {
  const CanvasComponent = <T extends HTMLCanvasElement>({
    text,
    options,
  }: IQRCode) => {
    const inputRef = React.useRef<T>(null);

    React.useEffect(
      function () {
        if (inputRef && inputRef.current && options) {
          QRCode.toCanvas(
            inputRef.current,
            text,
            options,
            function (error: Error) {
              if (error) {
                throw error;
              }
            }
          );
        }
      },
      [text, options, inputRef]
    );

    return <canvas ref={inputRef} />;
  };

  const Canvas = React.useMemo(() => CanvasComponent, []);

  return Canvas;
}

export function useQRCode() {
  const Canvas = useCanvasComponent();

  return {
    Canvas,
  };
}

// The MIT License (MIT)

// Copyright (c) 2020 Bunlong

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

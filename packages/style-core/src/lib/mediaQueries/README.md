# media query utilities `from` `until` `between`

Utility functions to create media queries

## Dependencies

- root/html font size should be set to 10px e.g.:
  `:root { font-size: 62.5%; }`

## Usage

```
import { from, until, between } from '@style-ui/style-core';
import styled from 'styled-components';

const styleObject = {
  [until('desktop')]: {
    display: 'inline-block',
  },
  [from('desktop')]: {
    display: 'block',
  },
  [between('mobile', 'tablet')]: {
    display: 'flex',
  },
};

const StyledComponent = styled.div`
  ${until('desktop')} {
    display: inline-block;
  }
  ${from('desktop')} {
    display: block;
  }
  ${between('mobile', 'tablet')} {
    display: flex;
  }
`;
```

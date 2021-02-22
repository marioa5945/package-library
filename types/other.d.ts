import H from 'history';
import * as _lodash from 'lodash';

declare global {
  declare interface _router {
    history: H.History<H.LocationState>;
  }

  declare const _: _lodash;
}

import H from 'history';
declare global {
  declare interface _router {
    history: H.History<H.LocationState>;
  }
}

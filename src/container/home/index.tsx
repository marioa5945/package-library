import React from 'react';
import homeStyle from './style.scss';

export default class PageHome extends React.PureComponent<_router> {
  constructor(props: _router) {
    super(props);
  }

  private nav = ['react-md', 'import-lodash-loader', 'rc-declaration-webpack-plugin', 'server-print'].reverse();

  render(): React.ReactElement {
    const { history } = this.props;

    return (
      <div className={homeStyle.home}>
        <main>
          <a href={'/'}>
            <img src="/img/logo.png" />
          </a>
          <ul>
            {this.nav.map((n: string) => (
              <li key={n} onClick={() => history.push(`/demos/${n}`)}>
                {n}
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

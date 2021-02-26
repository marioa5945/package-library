import React from 'react';
import homeStyle from './style.scss';
import navObj from '@base/config.toml';

export default class PageHome extends React.PureComponent<_router> {
  constructor(props: _router) {
    super(props);
  }

  private nav = navObj.packages.list.reverse();

  render(): React.ReactElement {
    const { history } = this.props;

    return (
      <div className={homeStyle.homePage}>
        <main>
          <span onClick={() => history.push('/')}>
            <img src="./img/logo.png" />
          </span>
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

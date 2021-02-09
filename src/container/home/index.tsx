import React from 'react';
import homeStyle from './style.scss';

interface ifsState {
  activeId: string;
  directory: Array<ifsDirectory>;
  markdown: string;
}

interface ifsDirectory {
  id: string;
  title: string;
  date: string;
  description: string;
}

export default class PageHome extends React.PureComponent<_router, ifsState> {
  constructor(props: _router) {
    super(props);

    this.state = {
      activeId: '',
      directory: [],
      markdown: '',
    };
  }

  render(): React.ReactElement {
    const { history } = this.props;

    return (
      <div className={homeStyle.home}>
        <main>
          <a href={'/'}>
            <img src="/img/logo.png" />
          </a>
          <ul>
            <li onClick={() => history.push('/react-md')}>react-md</li>
          </ul>
        </main>
      </div>
    );
  }
}

export default (source: string): string => {
  /**
   * lodash import funcation name array
   */
  const lodashFunNameArr: Array<string> = [];

  /**
   * Get lodash import funcation name to arry
   * @param {string}str
   */
  const lodashFunNameArrAdd = () => {
    const arr = /_\.(\w+)\(/.exec(source);
    if (arr) {
      lodashFunNameArr.push(arr[1]);
      const re = new RegExp(`_\\.${arr[1]}\\(`, 'g');
      source = source.replace(re, `_${arr[1]}(`);
      lodashFunNameArrAdd();
    }
  };

  lodashFunNameArrAdd();

  for (const n of lodashFunNameArr) {
    source = `import _${n} from 'lodash/${n}';${source}`;
  }

  return source;
};

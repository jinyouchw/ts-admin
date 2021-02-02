/**
 * 数据删除传入值的当前项
 * @type {array} val为传入值
 */
Array.prototype.remove = function(val) {
  let index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

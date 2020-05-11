/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-11 16:49:30
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-11 17:02:48
 */
//设置过期时间
const getExpiredTime = () => {
  let d = new Date() ;
  d.setTime(d.getTime() +  1 * 3600 * 1000) ;
  return d.toUTCString() ;
}


module.exports = getExpiredTime ;
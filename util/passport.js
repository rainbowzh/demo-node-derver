/*
 * @Description: 加密、校对
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-21 13:56:33
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-21 14:02:58
 */ 

const bcrypt = require('bcrypt');

const encrypt = async (password, saltTimes) => {
  let hash = await bcrypt.hash(password, saltTimes) ;
  return hash ;
}


const validate = async(password, hash) => {
  const match = await bcrypt.compare(password, hash) ;
  return match ;
}


module.exports = {
  encrypt ,
  validate
}
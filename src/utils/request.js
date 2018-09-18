import fetch from 'dva/fetch';
import path from 'path'
import {message} from "antd"
import { routerRedux } from 'dva/router';

const version = "/api/v1"




async function handleStatus(response) {
  console.log(response, "====")

  if (response.status >= 200 && response.status < 300) {
     return response.json();
  }else if (response.status == 301 && response.redirected){
    console.log("12212")
      const xx = await response.json()
      console.log(xx)
      return
      // routerRedux.push()
  }

  const res = await response.json()
  message.error(res.message)
  // throw new Error(res.message)
  return;
}



/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {

  url = path.join(version, url)
  options.body = JSON.stringify(options.body)
  options = Object.assign(options, { headers: { 'Content-Type': 'application/json' }})
  // const token = localStorage.getItem("token")
  // if (token)  {
  //    options.Authentication = token
  // }
  // console.log(url, options)
  return fetch(url, options).then(handleStatus)
}

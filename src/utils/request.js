import fetch from 'dva/fetch';
import path from 'path'
import {message} from "antd"

const version = "/api/v1"




async function handleStatus(response) {

  if (response.status >= 200 && response.status < 300) {
     return response.json();
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
  console.log(url, options)
  return fetch(url, options).then(handleStatus)
}

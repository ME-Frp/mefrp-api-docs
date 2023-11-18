<!--
 * @Author: Aehxy ahmrcxy@gmail.com
 * @Date: 2023-11-19 00:10:59
 * @LastEditors: Aehxy ahmrcxy@gmail.com
 * @LastEditTime: 2023-11-19 00:27:24
 * @FilePath: \mefrp-docs\docs\manual\main.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
# 基本内容

## API 简介 

ME Frp 开放后端 API，后端采用 Go 语言开发，符合 RESTful 规范

## API 信息

API EndPoint: https://api.mefrp.com

## API 架构
分为 v1 v2 v3 v4 四部分
### V1
ME Frp 在 1.0 版本时使用的是 [SakuraPanel](https://github.com/ZeroDream-CN/SakuraPanel)
这一版本 API 通过单独运行了一个 SakuraPanel 并对其代理实现

路径为 /api/v1/

暂未完工
### V2 
考虑到地址更新后 简单启动受到影响，故保留 v2 版本简单启动的一部分

路径为 /api/v2/

暂未完工
### V3

此处为 Frps 鉴权，对于开发者用处不大，暂不公开

路径为 /api/v3/
### V4 
此处为主要 API 部分
此处分为 public 和 auth 两部分
#### Public：
无需鉴权的 API
路径为 /api/v4/public
#### Auth:
需要鉴权的 API
路径为 /api/v4/auth
需要在Header中写入`"Authorization": "用户token"`，此类API标题旁将打上`验证Header`字样。 

[文档](/manual/v4)

### 格式
API返回统一格式  
```json
{
    ...
    "message": <string>,
    "status": <number>
}
```
 > **解释**  
 > `message` -> `文本` API提示消息  
 > `status` -> `数字` HTTP Status Code  

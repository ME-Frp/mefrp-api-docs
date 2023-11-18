/*
 * @Author: Aehxy ahmrcxy@gmail.com
 * @Date: 2023-11-19 00:10:59
 * @LastEditors: Aehxy ahmrcxy@gmail.com
 * @LastEditTime: 2023-11-19 00:33:31
 * @FilePath: \mefrp-docs\docs\.vuepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    title: 'ME Frp 镜缘映射 API 文档',
    themeConfig: {
      nav: [
        { text: 'ME Frp 用户手册', link: 'https://docs.mefrp.com' },
        { text: '极流网络官网', link: 'https://www.mcserverx.com' },
        { text: 'Aehxy Blog', link: 'https://www.aehxy.com' },
      ],
      sidebar:
      [ ['/manual/main', '基本内容'],
          //目录1
          {
            title: '各版本 API',
            children: [
              ['/manual/v4', 'V4'],
            ]
          },
      ]
  }
}

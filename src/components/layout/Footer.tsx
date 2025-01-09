import React from 'react';
import { Code2, MessageCircle, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">新农创(北京)大数据科技有限公司</span>
            </div>
            <p className="text-sm">
            专注于为企业提供专业的互联网解决方案，助力企业数字化转型升级。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">企业官网搭建</li>
              <li className="text-gray-400">小程序制作</li>
              <li className="text-gray-400">网络营销</li>
              <li className="text-gray-400">电商解决方案</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">公司简介</li>
              <li className="text-gray-400">成功案例</li>
              <li className="text-gray-400">新闻资讯</li>
              <li className="text-gray-400">联系我们</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-sm">
              <li>地址：北京市海淀区永澄北路2号院1号楼4层A4900号</li>
              <li>电话：010-12345678</li>
              <li>邮箱：contact@zhihuikeji.com</li>
              <li>工作时间：周一至周五 9:00-18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} 新农创(北京)大数据科技有限公司 版权所有 京ICP备12345678号</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  </li>
);

export default Footer;
import React from 'react';
import { Globe, Smartphone, Megaphone, ShoppingBag, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: '企业官网搭建',
    description: '专业的企业网站建设服务，打造响应式现代化网站，提升品牌形象。',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: '小程序制作',
    description: '微信小程序开发，助力企业快速打造移动端产品，连接亿万用户。',
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: '网络营销',
    description: '整合SEO优化、社媒运营、内容营销等多种推广方式，提升品牌知名度。',
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: '电商解决方案',
    description: '提供电商网站和小程序商城开发，助力企业快速搭建线上销售渠道。',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我们的服务
          </h2>
          <p className="text-lg text-gray-600">
            为企业提供全方位的互联网解决方案，助力企业实现数字化转型
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors group"
            >
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={`/services/${service.title}`}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                了解更多
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
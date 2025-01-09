import React from 'react';

const caseStudies = [
  {
    title: '企业官网建设',
    description: '为某大型企业打造了一个现代化、响应式的企业官网，提升了品牌形象和用户体验。',
    imageUrl: '/website.png',
  },
  {
    title: '小程序开发',
    description: '为一家零售公司开发了微信小程序，实现了线上线下的无缝连接，增加了客户粘性。',
    imageUrl: '/xiaochengxu.png',
  },
  {
    title: 'SEO优化',
    description: '通过SEO优化策略，帮助一家电商平台在搜索引擎中提升了排名，增加了自然流量。',
    imageUrl: '/seo.jpg',
  },
  {
    title: '社交媒体营销',
    description: '为一家初创公司制定了社交媒体营销方案，成功提升了品牌知名度和用户参与度。',
    imageUrl: '/social.jpg',
  },
  {
    title: '电商平台搭建',
    description: '为一家传统零售企业搭建了电商平台，实现了线上销售渠道的快速拓展。',
    imageUrl: '/ecommerce.jpg',
  },
  {
    title: '数据分析服务',
    description: '为一家金融机构提供了数据分析服务，帮助其优化了业务流程和客户服务。',
    imageUrl: '/data.jpg',
  },
];

const Cases = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            成功案例
          </h2>
          <p className="text-lg text-gray-600">
            了解我们如何帮助客户实现他们的商业目标。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={caseStudy.imageUrl} alt={caseStudy.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600">{caseStudy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases; 
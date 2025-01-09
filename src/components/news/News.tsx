import React from 'react';

const newsArticles = [
  {
    title: '公司荣获年度最佳创新奖',
    date: '2024-10-01',
    description: '在2024年度科技大会上，公司凭借其在人工智能领域的创新技术解决方案，荣获年度最佳创新奖。这一奖项肯定了公司在技术创新方面的领先地位。',
  },
  {
    title: '新产品发布会圆满成功',
    date: '2024-09-15',
    description: '公司在北京举办的新产品发布会取得了圆满成功，吸引了来自各行业的专家和客户。新产品的发布标志着公司在智能家居领域的又一重大突破。',
  },
  {
    title: '与知名企业达成战略合作',
    date: '2024-08-20',
    description: '公司与全球知名企业达成战略合作协议，双方将共同致力于推动数字化转型，提升行业效率和客户体验。',
  },
  {
    title: '公司启动绿色科技项目',
    date: '2024-07-10',
    description: '公司宣布启动绿色科技项目，旨在通过技术创新减少碳排放，推动可持续发展。该项目得到了政府和行业的广泛支持。',
  },
  {
    title: '年度财报显示业绩稳步增长',
    date: '2024-06-05',
    description: '公司发布的年度财报显示，2024年公司业绩稳步增长，营收和利润均创历史新高。这得益于公司在技术研发和市场拓展方面的持续投入。',
  },
];

const News = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            新闻资讯
          </h2>
          <p className="text-lg text-gray-600">
            了解公司的最新动态和行业资讯。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{article.date}</p>
              <p className="text-gray-600">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News; 
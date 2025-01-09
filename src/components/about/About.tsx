import React from 'react';
import Banner from '../common/Banner';

const About = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                关于我们
              </h2>
              <p className="text-lg text-gray-600">
                新农创(北京)大数据新农创(北京)大数据科技有限公司于2019年03月14日成立。公司经营范围包括：技术开发、技术推广、技术转让、技术咨询、技术服务；计算机系统服务；基础软件服务；软件开发；应用软件服务；产品设计；模型设计；工艺美术设计；文艺创作；教育咨询（中介服务除外）；电脑动画设计；企业策划；设计、制作、代理、发布广告；市场调查；企业管理咨询；承办展览展示活动；组织文化艺术交流活动（不含营业性演出）；工程和技术研究与试验发展；农业科学研究与试验发展；数据处理（数据处理中的银行卡中心、PUE值在1.4以上的云计算数据中心除外）；经营电信业务等。
              </p>
            </div>
            <div>
              <img
                src="/about-image.png"
                alt="关于我们"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">我们的使命</h3>
              <p className="text-gray-600">
                我们的使命是通过创新的技术和优质的服务，帮助企业在数字化时代取得成功。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">我们的团队</h3>
              <p className="text-gray-600">
                我们拥有一支经验丰富的专业团队，致力于为客户提供最佳的解决方案。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 
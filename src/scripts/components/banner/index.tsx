import React, { useEffect, useState } from 'react';
import { Carousel, Divider } from 'antd';
import { queryFocus } from '@api/index';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './index.less';
/**
 * banner
 */
type BannerItem = {
  id: number;
  title: string;
  detailUrl: string;
  publishTime: number;
  subject: string;
  categoryId: number;
  categoryName: null;
  previewNum: number;
  picUrl: string;
  appUrl: string;
  link: string;
  type: number;
  source: string;
  appLink: string | null;
  content: string | null;
  appLinkForText: string;
};

const BannerItem = ({ item }: { item: BannerItem }) => {
  //1 cms 页面、2外部链接

  const { link, picUrl } = item;

  return (
    <>
      {link ? (
        <a
          href={link}
          target="_blank"
          style={{ backgroundImage: `url(${picUrl})` }}
          className="img-item"
        />
      ) : (
        <div
          className="img-item"
          style={{ backgroundImage: `url(${picUrl})` }}
        ></div>
      )}
    </>
  );
};

const Banner = () => {
  const [focusList, setFocusList] = useState<BannerItem[]>([]);
  const [hasArrows, setArrows] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const result = await queryFocus();
        setFocusList([...result?.rows]);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('finally');
      }
      //setFocusList([...focusListData]);
    })();
  }, []);

  return (
    <div
      className="banner m-banner"
      onMouseEnter={() => setArrows(true)}
      onMouseLeave={() => setArrows(false)}
    >
      {focusList?.length > 0 && (
        <Carousel
          effect="fade"
          arrows={hasArrows}
          autoplay
          prevArrow={
            <span>
              <IoIosArrowBack />
            </span>
          }
          nextArrow={
            <span>
              <IoIosArrowForward />
            </span>
          }
        >
          {focusList.map(item => (
            <BannerItem item={item} key={`banner-${item.id}`} />
          ))}
        </Carousel>
      )}
    </div>
  );
};
export default Banner;

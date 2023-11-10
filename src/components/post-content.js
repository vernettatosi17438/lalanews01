/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useRef } from "react";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";

const PostContent = ({ html, ads }) => {
  const imgIdx = useRef(0);
  const pIdx = useRef(0);

  const transform = useCallback((node, index) => {
    
    // if (node.type === "tag" && node.name === "img") {
    //   const ad = adsImgTag.find((ad) => ad.option_index === imgIdx.current);
    //   imgIdx.current++;

    //   return (
    //     <div key={index}>
    //       <img
    //         data-src={node.attribs.src}
    //         className={`lazyload ${node.attribs.class}`}
    //         alt={node.attribs.alt}
    //         width={node.attribs.width}
    //         height={node.attribs.height}
    //         sizes={node.attribs.sizes}
    //         dataindex={imgIdx.current}
    //       />
    //     </div>
    //   );
    // }

    // if ((node.type === "tag" && node.name === 'p') || (node.type === 'text' && !node.parent)) {
    //   const ad = adsPTag.find((ad) => ad.option_index === pIdx.current);
    //   pIdx.current++;
    //   return (
    //     <div key={index}>
    //       {convertNodeToElement(node, index, transform)}
    //     </div>
    //   );
    // }
  }, []);

  return ReactHtmlParser(html, { transform });
};

export default PostContent;

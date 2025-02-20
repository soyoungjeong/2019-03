import React, { useState, useEffect } from 'react';
import ProfileIcon from '../../../../../components/ProfileIcon';
import { SearchResultWrapper, ResultInfo } from './styles';

const SearchResult = ({ result, isLast }) => {
  const [resultInfo, setResultInfo] = useState({
    imgSrc: null,
    content: null,
    option: null,
  });

  useEffect(() => {
    if (!result.username) {
      setResultInfo({
        imgSrc: 'https://kr.object.ncloudstorage.com/youngstargram/hashtag.png',
        content: `# ${result.name}`,
        option: null,
      });
    } else {
      setResultInfo({
        imgSrc: undefined, // 나중에 user.profileImage로 변경
        content: result.username,
        option: <span className="option">{result.name}</span>,
      });
    }
  }, [result, setResultInfo]);

  return (
    <SearchResultWrapper isLast={isLast}>
      <div>
        <ProfileIcon imageURL={resultInfo.imgSrc} />
      </div>
      <ResultInfo>
        <span>{resultInfo.content}</span>
        {resultInfo.option}
      </ResultInfo>
    </SearchResultWrapper>
  );
};

export default SearchResult;

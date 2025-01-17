import styled from "styled-components";

const skeletonColor = "#aba9a9";

export const ContainerCard = styled.div`
  animation: ${(props) =>
    props.$skeleton ? "fadeCard 4s infinite alternate" : "none"};
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;

  @keyframes fadeCard {
    0% {
      opacity: 0.5;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0.5;
    }
  }
`;
export const Photo = styled.img`
  border: 4px solid ${(props) => (props.$skeleton ? skeletonColor : "#fff")};
  border-radius: 50%;
  width: ${(props) => (props.$skeleton ? "90px" : "25%")};
  z-index: 1000; 
`;
export const ContainerContent = styled.article`
  align-items: center;
  background-color: ${(props) => (props.$skeleton ? skeletonColor : "#fff")};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 150px;
  margin-top: -12.5%;
  padding: 12.5% 2rem 1rem 2rem;
  width: 300px;
`;
export const ContainerStars = styled.div`
  display: flex;
`;
export const SkeletonText = styled.div`
  background-color: #cecccc;
  border-radius: 10px;
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  animation: fade 2s ease-in-out infinite;

  @keyframes fade {
    0% {
      opacity: 0.1;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0.2;
    }
  }
`;

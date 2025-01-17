import styled from "styled-components";

export const Star = styled.span`
    color: ${props => props.value >= props.rating ? "#ffd700" : "#868686"};
    font-size: ${props => props.size || "20px"};
`;
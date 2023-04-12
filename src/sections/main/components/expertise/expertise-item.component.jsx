import styled from "styled-components";

import HeadingTertiary from "../../../../Typography/heading-tertiary/heading-tertiary.component";
import Detail from "../../../../Typography/detail/detail.component";
import { CardTitle, CardContent } from "./expertise.styles";

export const ExpertiseItem = ({ cardTitle, detail }) => {
    return (
      <tbody>
        <tr>
          <CardTitle>
            <HeadingTertiary>{cardTitle}</HeadingTertiary>
          </CardTitle>
          <CardContent>
            <Detail>{detail}</Detail>
          </CardContent>
        </tr>
      </tbody>
    );
  };

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  padding-bottom: 8px;
`;

function SourceFilter({ sources, onChange }) {
  return (
    <FilterContainer>
      Filter by source:{" "}
      <select data-testid="sourceFilter" onChange={onChange}>
        <option value="">select source to filter by...</option>
        {sources.map(source => {
          return (
            <option key={source} value={source}>
              {source}
            </option>
          );
        })}
      </select>
    </FilterContainer>
  );
}

SourceFilter.propTypes = {
  sources: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
};

export { SourceFilter };

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
type Iprops ={
  title: string
}
export default function FilterByIndustrySearch() {
  const defaultProps = {
    options: ConpanyName,
    getOptionLabel: (option: Iprops) => option.title,

  };

  return (
    <div className="text">
      <Autocomplete
        className="search"
        {...defaultProps}
        id="auto-select"
        // variant="outlined"
        renderInput={(params) => (
          <TextField placeholder="Search" className="khana-khalo" {...params} />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const ConpanyName = [
  { title: "Bel Sur Productions Limited - 2341234324324" },
  { title: "Bel Carpio Cleaning Services Limited - 21332453243" },
  { title: "Bela Cruz Consulting Limited - 432414324234" },
  { title: "Bela Marie Interiors Limited - 2341324234" },
  { title: "Bela Marie Interiors Trading Limited - 12312343434" },
  { title: "Bela Marie Interiors Trading Limited - 234123324324" },
];

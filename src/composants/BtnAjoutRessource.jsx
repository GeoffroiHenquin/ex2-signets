import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import '../style/BtnAjoutRessource.scss'

export default function BtnAjoutRessource() {
  return (
    <button className="BtnAjoutRessource">
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </button>
  );
}
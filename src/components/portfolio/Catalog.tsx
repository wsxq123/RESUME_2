import { ButtonGroup, Button } from '@mui/material';
import { catalogOptionType } from '@components/portfolio/Main';

const Catalog = ({
  catalogOptionList,
  handleCatalogBtnClick,
}: {
  catalogOptionList: catalogOptionType[];
  handleCatalogBtnClick(id: number): void;
}) => {
  return (
    <ButtonGroup variant='text' aria-label='Basic button group' fullWidth>
      {catalogOptionList.map((item) => (
        <Button key={item.id} onClick={() => handleCatalogBtnClick(item.id)}>
          {item.title}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Catalog;

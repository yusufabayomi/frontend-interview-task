import { useContext } from 'react';
import { AccountSection, AccountLabel, AccountList, AccountListItem, InfoText } from '../modules/property-details/style';
import RowContainer from './row-container';
import { AccountContext } from '../context';

const PropertyDetailSection = () => {
  const {
    account: { name, bankName, postcode },
  } = useContext(AccountContext);

  return (
    <AccountSection>
      <AccountLabel>Property details</AccountLabel>
      <RowContainer>
        <AccountList>
          <AccountListItem>
            <InfoText>{name}</InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>{bankName}</InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>{postcode}</InfoText>
          </AccountListItem>
        </AccountList>
      </RowContainer>
    </AccountSection>
  );
};

export default PropertyDetailSection;

import { account } from '../helper';

import { AccountSection, AccountLabel, AccountList, AccountListItem, InfoText } from '../modules/property-details/style';
import RowContainer from './row-container';

const { name, bankName, postcode } = account;

const PropertyDetailSection = () => {
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

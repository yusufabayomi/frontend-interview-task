import { useContext } from 'react';
import { numberFormatter } from '../helper';
import { AccountSection, AccountLabel, AccountList, AccountListItem, InfoText } from '../modules/property-details/style';
import RowContainer from './row-container';
import { AccountContext } from '../context';

const onClickHandler = () => alert('You have navigated to the mortgage page');

const MortgageSection = () => {
  const {
    account: { associatedMortgages },
  } = useContext(AccountContext);
  const mortgage = associatedMortgages.length ? associatedMortgages[0] : undefined;

  if (mortgage) {
    const { currentBalance, name } = mortgage;
    return (
      <AccountSection>
        <AccountLabel>Mortgage</AccountLabel>
        <RowContainer onClick={onClickHandler}>
          <AccountList>
            <AccountListItem>
              <InfoText>{numberFormatter(Math.abs(currentBalance))}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{name}</InfoText>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>
    );
  }
  return null;
};

export default MortgageSection;

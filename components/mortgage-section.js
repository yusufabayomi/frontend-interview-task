import { account, numberFormatter } from '../helper';
import { AccountSection, AccountLabel, AccountList, AccountListItem, InfoText } from '../modules/property-details/style';
import RowContainer from './row-container';

const { associatedMortgages } = account;
const mortgage = associatedMortgages.length ? associatedMortgages[0] : undefined;

const onClickHandler = () => alert('You have navigated to the mortgage page');

const MortgageSection = () => {
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

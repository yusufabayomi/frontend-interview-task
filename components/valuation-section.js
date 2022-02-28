import RowContainer from './row-container';
import { AccountSection, AccountLabel, AccountList, AccountListItem, InfoText, Badge } from '../modules/property-details/style';
import { dateFormatter, numberFormatter, yearsFromNow } from '../helper';
import { useContext } from 'react';
import { AccountContext } from '../context';

const ValuationSection = () => {
  const {
    account: { originalPurchasePrice, originalPurchasePriceDate, recentValuation },
  } = useContext(AccountContext);

  const sincePurchase = recentValuation.amount - originalPurchasePrice;

  const sincePurchasePercentage = (sincePurchase / originalPurchasePrice) * 100;

  const annualAppreciation = sincePurchasePercentage / yearsFromNow(originalPurchasePriceDate);

  return (
    <AccountSection>
      <AccountLabel>Valuation Change</AccountLabel>
      <RowContainer>
        <AccountList>
          <AccountListItem>
            <InfoText>
              Purchased for {numberFormatter(originalPurchasePrice)} in {dateFormatter(originalPurchasePriceDate)}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>
              Since purchase
              <Badge>
                {numberFormatter(sincePurchase)} ({sincePurchasePercentage}%)
              </Badge>
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>
              Annual appreciation <Badge>{annualAppreciation}%</Badge>
            </InfoText>
          </AccountListItem>
        </AccountList>
      </RowContainer>
    </AccountSection>
  );
};

export default ValuationSection;

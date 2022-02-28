import { account, addDaysToDate, dateFormatter, numberFormatter } from '../helper';
import { AccountSection, AccountLabel, AccountHeadline, AccountList, AccountListItem, InfoText } from '../modules/property-details/style';

const {
  lastUpdate,
  updateAfterDays,
  recentValuation: { amount },
} = account;

const EstimateSection = () => {
  return (
    <AccountSection>
      <AccountLabel>Estimated Value</AccountLabel>
      <AccountHeadline>{numberFormatter(amount)}</AccountHeadline>
      <AccountList>
        <AccountListItem>
          <InfoText>Last updated {dateFormatter(lastUpdate)}</InfoText>
        </AccountListItem>
        <AccountListItem>
          <InfoText>Next update {addDaysToDate(lastUpdate, updateAfterDays)}</InfoText>
        </AccountListItem>
      </AccountList>
    </AccountSection>
  );
};

export default EstimateSection;

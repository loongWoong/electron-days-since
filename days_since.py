import datetime

def days_since_date(year, month, day):
    """Calculates the number of days between a given date and today."""
    target_date = datetime.date(year, month, day)
    today = datetime.date.today()
    delta = today - target_date
    return delta.days

# Get the number of days since 2017-07-16
days = days_since_date(2017, 7, 16)

# Print the result (you would replace this with code to update your plugin's display)
print(f"Days since 2017-07-16: ")
print(f" {days} days")

# Example of how to format the output for better readability:

years = days // 365  # Integer division to get whole years
remaining_days = days % 365  # Modulo operator to get remaining days
months = remaining_days // 30  # Approximate months (30 days per month)
remaining_days_2 = remaining_days % 30  # Remaining days after approximate months

print(f"Years: {years},  Months: {months},  Days: {remaining_days_2}")


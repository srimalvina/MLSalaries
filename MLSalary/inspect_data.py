import pandas as pd

# Load your data
df = pd.read_csv('C:/Users/CH.SRIMALVINA/MLSalary/salaries.csv')

# Print column names and the first few rows for inspection
print('Columns in dataset:', df.columns)
print('First few rows of dataset:')
print(df.head())

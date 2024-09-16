import streamlit as st
import pandas as pd

# Load your data
df = pd.read_csv('C:/Users/CH.SRIMALVINA/MLSalary/salaries.csv')

# Print column names and the first few rows for inspection
st.write('Columns in dataset:', df.columns)
st.write('First few rows of dataset:', df.head())

# Define the correct column names based on your dataset
year_column = 'Yearly'  # Update to actual column name
job_title_column = 'Job_Title'  # Update to actual column name if needed

# Create the main table
year_options = df[year_column].unique()
selected_year = st.selectbox('Select a year:', year_options)

# Filter data based on the selected year
df_filtered = df[df[year_column] == selected_year]

# Display the main table
st.write('Main Table:', df_filtered)

# Aggregating job titles and counts
job_aggregation = df_filtered.groupby(job_title_column).size().reset_index(name='Number_of_Jobs')

# Display the aggregated table
st.write(f'Aggregated Job Titles for {selected_year}:', job_aggregation)

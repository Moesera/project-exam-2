
function BookingDate({dateFrom, dateTo}) {
  const startDate =  new Date(Date.parse(dateFrom))
  const endDate = new Date(Date.parse(dateTo));

  const options = { year: "numeric", month: "long", day: "numeric"}
  const formatter = new Intl.DateTimeFormat("en-US", options);

return (
    <p>{formatter.format(startDate)} - {formatter.format(endDate)}</p>
)
}

export default BookingDate;
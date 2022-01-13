function kiem_tra() {
	let kiem_tra_loi = false;
	let full_name = document.getElementById('full_name').value;
	if (full_name === "") {
		document.getElementById('loi_full_name').innerHTML = 'Không được để trống !!';
		kiem_tra_loi = true;
	} else {
		let regex_ten = /^[A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*(?:[ ][A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*)*$/;
		if (regex_ten.test(full_name) == false) {
			document.getElementById('loi_full_name').innerHTML = 'Tên không hợp lệ !!';
			kiem_tra_loi = true;
		}
	}
	let dob = document.getElementById('dob').value;
	if (dob === "") {
		document.getElementById('loi_dob').innerHTML = ' Không được để trống !!';
		kiem_tra_loi = true;
	}
	let phone_number = document.getElementById('phone_number').value;
	if (phone_number === "") {
		document.getElementById('loi_phone_number').innerHTML = ' Không được để trống !!';
		kiem_tra_loi = true;
	}
	let address = document.getElementById('address').value;
	if (address === "") {
		document.getElementById('loi_address').innerHTML = ' Không được để trống !!';
		kiem_tra_loi = true;
	}
	let zip_code = document.getElementById('zip_code').value;
	if (zip_code === "") {
		document.getElementById('loi_zip_code').innerHTML = ' Không được để trống !!';
		kiem_tra_loi = true;
	}
	let regex_zip_code = /^[0-9]{3}-[0-9]{4}-[0-9]{3}$/;
	if (regex_zip_code.test(zip_code) == false) {

		document.getElementById('loi_zip_code').innerHTML = ' Sai định dạng !!';
		kiem_tra_loi = true;
	}
	if (kiem_tra_loi) {
		return false
	}
}
function formatZipcode(value) {
	const zipcode = value.replace(/[^0-9.]/g, '');
	const zipcodeLength = zipcode.length;
	if (zipcodeLength <= 3) return zipcode;
	if (zipcodeLength <= 7) {
		return `${zipcode.slice(0, 3)}-${zipcode.slice(3)}`;
	}
	return `${zipcode.slice(0, 3)}-${zipcode.slice(3, 7)}-${zipcode.slice(7, 9)}`;
}
function zipcodeFormatter() {
	const inputField = document.getElementById('zip_code');
	const formattedInputValue = formatZipcode(inputField.value);
	inputField.value = formattedInputValue;

}



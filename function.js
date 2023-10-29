

function warning(text) {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: text,
        showConfirmButton: false,
        timer: 1500
    })
}


function serialize2(tablo,location) {
    tinyMCE.triggerSave();
    var data = document.getElementById(tablo);
    var post = new FormData(data);
    jQuery.ajax({
        type: "post",
        url: location,
        data: post,
        dataType: 'json',
        cache: false,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data",
        complete: function (data) {
          
            let statu = data.responseText;
      
            if(statu==1){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "İşleminiz başarıyla Gerçekleşti",
                    showConfirmButton: false,
                    timer: 1000
                })
                setInterval(() => { window.location.reload() }, 2000);
            }else if(statu==5){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Lütfen Boş Alan Bırakmayınız !",
                    showConfirmButton: false,
                })

            }else if(statu==9){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Aynı Mail Adresine Ait Kullanıcı vardır Lütfen Farklı mail Adresi Giriniz !",
                    showConfirmButton: false,
                })

           
            }else if(statu==4){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Kullanıcı adı veya şifre hatalı tekrar deneyiniz !",
                    showConfirmButton: false,
                })

           
            }else if(statu==7){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Mail Adresi Doğrulamak için yönlendiriliyorsunuz lütfen bekleyin !",
                    showConfirmButton: false,
                })

                setInterval(() => { window.location.href = '/mailVerification'; }, 1500);

            }else if(statu==20){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "Mail Adresiniz Doğrulandı Giriş Sayfasına Yönlendiriliyorsunuz !",
                    showConfirmButton: false,
                })

                setInterval(() => { window.location.href = '/login'; }, 1500);

            }else if(statu==21){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Mail Doğrulama kodu hatalı lütfen kontrol ederek tekrar deneyiniz !",
                    showConfirmButton: false,
                })

         

            }else if(statu==22){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Şifreler Uyuşmuyor lütfen kontrol ediniz !",
                    showConfirmButton: false,
                })

         

            } else{
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "İşleminiz Gerçekleşirken Hata !",
                    showConfirmButton: false,
                })
                
            }
        }
    });
}


function LockScreen(tablo,location) {
    var data = document.getElementById(tablo);
    var post = new FormData(data);
    jQuery.ajax({
        type: "post",
        url: location,
        data: post,
        dataType: 'json',
        cache: false,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data",
        complete: function (data) {

            let statu = data.responseText;

            if(statu==1){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "İşleminiz başarıyla Gerçekleşti",
                    showConfirmButton: false,
                    timer: 1000
                })
                setInterval(() => { window.location.href ='/' }, 2000);
            }else if(statu==5){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Lütfen Boş Alan Bırakmayınız !",
                    showConfirmButton: false,
                })

            }else if(statu==9){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Aynı Mail Adresine Ait Kullanıcı vardır Lütfen Farklı mail Adresi Giriniz !",
                    showConfirmButton: false,
                })


            }else if(statu==4){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Kullanıcı adı veya şifre hatalı tekrar deneyiniz !",
                    showConfirmButton: false,
                })


            }else if(statu==7){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Mail Adresi Doğrulamak için yönlendiriliyorsunuz lütfen bekleyin !",
                    showConfirmButton: false,
                })

                setInterval(() => { window.location.href = '/mailVerification'; }, 1500);

            }else if(statu==20){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "Mail Adresiniz Doğrulandı Giriş Sayfasına Yönlendiriliyorsunuz !",
                    showConfirmButton: false,
                })

                setInterval(() => { window.location.href = '/login'; }, 1500);

            }else if(statu==21){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Mail Doğrulama kodu hatalı lütfen kontrol ederek tekrar deneyiniz !",
                    showConfirmButton: false,
                })



            }else if(statu==22){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Şifreler Uyuşmuyor lütfen kontrol ediniz !",
                    showConfirmButton: false,
                })



            } else{
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "İşleminiz Gerçekleşirken Hata !",
                    showConfirmButton: false,
                })

            }
        }
    });
}


function yedekMailGonder(tablo) {
    $("#ydkLoaingPlase").html('<i class="fa-solid fa-spinner"></i><b class="ml-2">Lütfen Bekleyiniz ....</b>');
    var data = document.getElementById(tablo);
    var post = new FormData(data);
    jQuery.ajax({
        type: "post",
        url: 'mailSend/disa_aktar.php',
        data: post,
        dataType: 'json',
        cache: false,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data",
        complete: function (data) {

            let statu = data.responseText;

   

            if(statu==1){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "İşleminiz başarıyla Gerçekleşti",
                    showConfirmButton: false,
                    timer: 1000
                })
                $("#ydkLoaingPlase").html("<b>Yedek Başarılı Şekilde Gönderilmişitir ....</b>");
            }else if(statu==5){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Lütfen Boş Alan Bırakmayınız !",
                    showConfirmButton: false,
                })
                $("#ydkLoaingPlase").html("<b>Lütfen Boş Alan Bırakmayınız  ....</b>");

            }else if(statu==9){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Aynı Mail Adresine Ait Kullanıcı vardır Lütfen Farklı mail Adresi Giriniz !",
                    showConfirmButton: false,
                })


            }else if(statu==4){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Kullanıcı adı veya şifre hatalı tekrar deneyiniz !",
                    showConfirmButton: false,
                })


            }else if(statu==7){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Mail Adresi Doğrulamak için yönlendiriliyorsunuz lütfen bekleyin !",
                    showConfirmButton: false,
                })

                setInterval(() => { window.location.href = '/mailVerification'; }, 1500);

            }else if(statu==20){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "Mail Adresiniz Doğrulandı Giriş Sayfasına Yönlendiriliyorsunuz !",
                    showConfirmButton: false,
                })

                setInterval(() => { window.location.href = '/login'; }, 1500);

            }else if(statu==21){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Mail Doğrulama kodu hatalı lütfen kontrol ederek tekrar deneyiniz !",
                    showConfirmButton: false,
                })



            }else if(statu==22){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Şifreler Uyuşmuyor lütfen kontrol ediniz !",
                    showConfirmButton: false,
                })



            } else{
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "İşleminiz Gerçekleşirken Hata !",
                    showConfirmButton: false,
                })

            }
        }
    });
}
function yedekMailAl(tablo) {
    $("#ydkSqlLoadingPlase").html('<i class="fa-solid fa-spinner"></i><b class="ml-2">Lütfen Bekleyiniz ....</b>');
    var data = document.getElementById(tablo);
    var post = new FormData(data);
    jQuery.ajax({
        type: "post",
        url: 'mailSend/ice_aktar.php',
        data: post,
        dataType: 'json',
        cache: false,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data",
        complete: function (data) {

            let statu = data.responseText;

            alert(statu);

            if(statu==1){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "İşleminiz başarıyla Gerçekleşti",
                    showConfirmButton: false,
                    timer: 1000
                })
                $("#ydkSqlLoadingPlase").html("<b>Yedek Başarılı Şekilde Yüklenmiştir  ....</b>");
                setInterval(() => { window.location.reload(); }, 3000);
            }else if(statu==5){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Lütfen Boş Alan Bırakmayınız !",
                    showConfirmButton: false,
                })
                $("#ydkLoaingPlase").html("<b>Lütfen Boş Alan Bırakmayınız  ....</b>");

            }else if(statu==9){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Aynı Mail Adresine Ait Kullanıcı vardır Lütfen Farklı mail Adresi Giriniz !",
                    showConfirmButton: false,
                })


            }else if(statu==4){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Kullanıcı adı veya şifre hatalı tekrar deneyiniz !",
                    showConfirmButton: false,
                })


            }else if(statu==7){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Mail Adresi Doğrulamak için yönlendiriliyorsunuz lütfen bekleyin !",
                    showConfirmButton: false,
                })

                setInterval(() => { window.location.href = '/mailVerification'; }, 1500);

            }else if(statu==20){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "Mail Adresiniz Doğrulandı Giriş Sayfasına Yönlendiriliyorsunuz !",
                    showConfirmButton: false,
                })

                setInterval(() => { window.location.href = '/login'; }, 1500);

            }else if(statu==21){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Mail Doğrulama kodu hatalı lütfen kontrol ederek tekrar deneyiniz !",
                    showConfirmButton: false,
                })



            }else if(statu==22){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Şifreler Uyuşmuyor lütfen kontrol ediniz !",
                    showConfirmButton: false,
                })



            } else{
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "İşleminiz Gerçekleşirken Hata !",
                    showConfirmButton: false,
                })

            }
        }
    });
}




function serialize3(tablo,location) {
    var data = document.getElementById(tablo);
    var post = new FormData(data);
    jQuery.ajax({
        type: "post",
        url: location,
        data: post,
        dataType: 'json',
        cache: false,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data",
        complete: function (data) {


            let statu = data.responseText;

            alert(statu);

            if(statu==1){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "İşleminiz başarıyla Gerçekleşti",
                    showConfirmButton: false,
                    timer: 1000
                })
                setInterval(() => { window.location.reload() }, 1500);
            }else if(statu==2){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Lütfen Boş Alan Bırakmayınız!",
                    showConfirmButton: false,
                })
            }else if(statu==7){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Lütfen Mail Adresinize Gelen Kodu Giriniz",
                    showConfirmButton: false,
                })

                setInterval(() => { window.location.href='mailOnayla.php' }, 1500);
            }else if(statu==3){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Engelli Kullanıcı Veya Pasif Kullanıcı Yönetici ile iletişime Geçiniz !",
                    showConfirmButton: false,
                })

            } else{
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: "Kullanıcı veya şifreniz. Hatalı!",
                    showConfirmButton: false,
                })

            }
        }
    });
}

function imgRemoveData(tablo, row, sutun,list,img) {
    Swal.fire({
        title: '',
        text: "Silmek İstiyormusunuz ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#59ceb5',
        cancelButtonColor: '#f27474',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "controller/delete.php",
                type: "POST",
                data: {
                    tablo: tablo,row: row,sutun: sutun,list: list,image: img,imgRemoveData: 'removeData'
                },
                success: function (data) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: data,
                        showConfirmButton: false,
                        timer: 800
                    })
                    setInterval(() => { window.location.reload() }, 1000);
                }
            });

        }
    })
}

function cokluRemoveData(tablo, row, sutun,list,img) {
    Swal.fire({
        title: '',
        text: "Silmek İstiyormusunuz ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#59ceb5',
        cancelButtonColor: '#f27474',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "controller/delete.php",
                type: "POST",
                data: {
                    tablo: tablo,row: row,sutun: sutun,list: list,image: img, checkbox: checkbox, cokluimgRemoveData: 'removeData'
                },
                success: function (data) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: data,
                        showConfirmButton: false,
                        timer: 800
                    })
                    setInterval(() => { window.location.reload() }, 1000);
                }
            });

        }
    })
}


function aktifpasif(id, tablo,Class,row) {
    var statu = 0;
    var status = document.querySelectorAll("."+Class);
    if ($("."+Class).is(':checked')) {
        statu = 1;
    } else {
        statu = 0;
    }
    $.ajax({
        method: "POST",
        url: '/aktifPasif',
        data: { tablo: tablo,statu:statu,  id: id,sutun:row, datestatu: 'datestatu' },
        success: function(sonuc) {
        }
    });
}







function removeData(tablo, row, sutun) {
    Swal.fire({
        title: '',
        text: "Silmek İstiyormusunuz ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/removeData",
                type: "POST",
                data: { tablo: tablo, row: row, sutun: sutun, removeData: 'removeData' },
                success: function (data) {
                 
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: data,
                        showConfirmButton: false,
                        timer: 1000
                    })
                    setInterval(() => { window.location.reload() }, 2500);

                }
            });

        }
    })
}


function bilgiChangceCheck(tablo, row, sutun) {
    Swal.fire({
        title: '',
        text: "Okundu Olarak İşaretlemek İstiyormusunuz  ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/removeData",
                type: "POST",
                data: { tablo: tablo, row: row, sutun: sutun, removeData: 'removeData' },
                success: function (data) {

                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'İşleminiz Başarıyla Gerçekleştirilmiştir.',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    setInterval(() => { window.location.reload() }, 2500);

                }
            });

        }
    })
}

function removeDataDelete(tablo, row) {
    Swal.fire({
        title: '',
        text: "Silmek İstiyormusunuz ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/removeDataDelete",
                type: "POST",
                data: { tablo: tablo, row: row, removeData: 'removeData' },
                success: function (data) {
                 
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: data,
                        showConfirmButton: false,
                        timer: 1000
                    })
                    setInterval(() => { window.location.reload() }, 2500);

                }
            });

        }
    })
}
function modalRemoveData(tablo, row, sutun,id) {
    Swal.fire({
        title: '',
        text: "Silmek İstiyormusunuz ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "app/controller/islem.php",
                type: "POST",
                data: { tablo: tablo, row: row, sutun: sutun, modalRemoveData: 'removeData' },
                success: function (data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Silme İşlemi Başarılı",
                        showConfirmButton: false,
                        timer: 1000
                    })
                    $("#"+id).html(data);

                }
            });

        }
    })
}


function userBlock(tablo, sutun) {
    Swal.fire({
        title: '',
        text: "Engellemek İstiyormusunuz ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "app/controller/islem.php",
                type: "POST",
                data: { tablo: tablo, sutun: sutun, userBlock: 'userBlock' },
                success: function (data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: data,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setInterval(() => { window.location.reload() }, 2500);

                }
            });

        }
    })
}

function personelEditView(id) {

    $.ajax({
        url: "/personelEditView",
        type: "POST",
        data: { personelDuzenle: 'personelDuzenle', id: id},
        success: function (data) {
        var set =  setInterval(()=>{

            $("#personelEditModals").html(data);
        },200);
          
        setTimeout(()=>{
            clearInterval(set);
        },300);

        }
    });

}


function userBlockRemove(tablo, mail) {
    Swal.fire({
        title: '',
        text: "Engeli Kaldırmak İstiyormusunuz ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "app/controller/islem.php",
                type: "POST",
                data: { tablo: tablo, mail: mail, userBlockRemove: 'userBlockRemove' },
                success: function (data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: data,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setInterval(() => { window.location.reload() }, 1500);

                }
            });

        }
    })
}




function wp_send(phone, text, url) {
    window.location.href = 'https://api.whatsapp.com/send?phone=90' + phone + '&text=' + text + '&url=' + url;
}





function modalSerializeTable(tablo,id) {
    var data = document.getElementById(tablo);
    var post = new FormData(data);
    $.ajax({
        type: "post",
        url: 'app/controller/islem.php',
        data: post,
        dataType: 'json',
        cache: false,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data",
        complete: function (data) {
           $("#"+id).html(data.responseText);
        }
    });
}


function modalSerializeTable2(tablo,id) {
            $.ajax({
                url: "controller/islem.php",
                type: "POST",
                data: {id: id,yoneticiUpdateGet: 'yoneticiUpdateGet' },
                success: function (data) {


                    $("#"+tablo).html(data);

                }
            });
}

function mailSend(postaMail,postaKonu,postaMesaj) {
    $.ajax({
        url: "/mailSend",
        type: "POST",
        data: {postaMail: postaMail,postaKonu: postaKonu,postaMesaj: postaMesaj,mailSend: 'mailSend' },
        success: function (data) {

            if(data==1){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "Doğrulama Kodu Gönderilmiştir Mail Adresinizi Lütfen Kontrol Ediniz",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    });
}


function  removeAllDdata(tablo){

    Swal.fire({
        title: '',
        text: "Silmek İstiyormusunuz ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.isConfirmed) {
            let  fs = document.querySelectorAll(".fs-15");
            let date = [];
            fs.forEach((e)=>{
                if(e.checked){
                    date.push(e.value);
                }
            })

            $.ajax({
                url: "/removeAllData",
                type: "POST",
                data: { tablo: tablo, row: date, removeAllData: 'removeAllData' },
                success: function (data) {

                    if(data==1){
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: "Kayıtlar Başarılı Şekilde Silinmiştir...",
                            showConfirmButton: false,
                            timer: 1000
                        })
                        setInterval(() => { window.location.reload() }, 1500);
                    }else if(data==2){
                        Swal.fire({
                            position: 'top-center',
                            icon: 'error',
                            title: "Lütfen Veri Seciniz...",
                            showConfirmButton: false,
                            timer: 1000
                        })

                    }



                }
            });

        }
    })



}








































function LogOut() {
    $.ajax({
        url: '/logout',
        type: "POST",
        data: { LogOut: "LogOut" },
        success: function (data) {
            window.location.reload();
        }
    });
}

package com.milk.RestController;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.milk.consumer.MilkConsumer;
import com.milk.daoImpl.MilkDaoImpl;

@Controller
@RestController
public class MilkController {
	private MilkDaoImpl milkDaoImpl = new MilkDaoImpl();

	@RequestMapping(value = "/getAllMilkConsumer", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<List<MilkConsumer>> getAllMilkConsumer() {
		List<MilkConsumer> milkConsumer = milkDaoImpl.getAllMilkConsumer();
		return new ResponseEntity<List<MilkConsumer>>(milkConsumer, HttpStatus.OK);
	}

	@RequestMapping(value = "/createMilkConsumer", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Boolean> createMilkConsumer(@RequestBody MilkConsumer milkConsumer) {
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}

	@RequestMapping(value = "/updateMilkConsumer", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Boolean> updateMilkConsumer(MilkConsumer milkConsumer) {
		return new ResponseEntity<Boolean>(milkDaoImpl.updateUser(milkConsumer), HttpStatus.OK);
	}

	@RequestMapping(value = "/deleteMilkConsumer", method = RequestMethod.DELETE)
	public @ResponseBody ResponseEntity<Boolean> deleteMilkConsumer(MilkConsumer milkConsumer) {
		return new ResponseEntity<Boolean>(milkDaoImpl.deleteUser(milkConsumer), HttpStatus.OK);
	}

	@RequestMapping(value = "/createMilkAttendance", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Boolean> createAttendance(@ModelAttribute MilkConsumer milkConsumers) {
		System.out.println(milkConsumers);
		
		return new ResponseEntity<Boolean>(milkDaoImpl.createAttendance(null), HttpStatus.OK);
	}

}
